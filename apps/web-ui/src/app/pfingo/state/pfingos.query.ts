import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { QueryEntity } from '@datorama/akita';
import { uniq } from 'lodash-es';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthQuery } from '../../auth/state/auth.query';
import { Profile } from '../../auth/state/auth.state';
import { Pfingo } from './pfingo.model';
import { PfingosState, PfingosStore } from './pfingos.store';

@Injectable({ providedIn: 'root' })
export class PfingosQuery extends QueryEntity<PfingosState> {

  constructor(protected store: PfingosStore, private af: AngularFirestore, private authQuery: AuthQuery) {
    super(store);
  }


  selectAllPfingos(): Observable<Pfingo[]> {

    // return this.selectAll();
    return this.selectAll().pipe(
      switchMap(pfingos => {
        if (pfingos?.length == 0) {
          return [[], []];
        }
        const userIds = uniq(pfingos.map(bp => bp.userId))

        return combineLatest([
          of(pfingos),
          combineLatest(
            userIds.map(userId =>

              this.af.collection<Profile>('users', ref => ref.where('uid', '==', userId)).valueChanges().pipe(
                map(authors => authors[0]),
              )
            )
          )]
        )
      }),
      map(([blogPosts, authors]) => {
        if (!blogPosts) {
          return [];
        }

        return blogPosts.map(blogPost => {
          return {
            ...blogPost,
            user: authors.find(a => a.uid === blogPost.userId),
            isOwn: this.authQuery.userId === blogPost.userId
          }
        })
      })
    );
  }

}
