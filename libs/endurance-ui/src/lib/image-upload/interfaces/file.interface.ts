import { BehaviorSubject } from 'rxjs';

export interface EnduranceFile {
    id: string;
    file: File;
    inProgress: boolean;

    localUrl: string

    onProgress: BehaviorSubject<number>;

    onSuccess: BehaviorSubject<boolean>;
}