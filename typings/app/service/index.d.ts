// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportClinic from '../../../app/service/clinic';
import ExportDataService from '../../../app/service/DataService';
import ExportPublic from '../../../app/service/public';

declare module 'egg' {
  interface IService {
    clinic: AutoInstanceType<typeof ExportClinic>;
    dataService: AutoInstanceType<typeof ExportDataService>;
    public: AutoInstanceType<typeof ExportPublic>;
  }
}
