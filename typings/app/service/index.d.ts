// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAppointment from '../../../app/service/appointment';
import ExportCheckinformfield from '../../../app/service/checkinformfield';
import ExportClinic from '../../../app/service/clinic';
import ExportDoctor from '../../../app/service/doctor';
import ExportPatient from '../../../app/service/patient';
import ExportSeeder from '../../../app/service/seeder';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    appointment: AutoInstanceType<typeof ExportAppointment>;
    checkinformfield: AutoInstanceType<typeof ExportCheckinformfield>;
    clinic: AutoInstanceType<typeof ExportClinic>;
    doctor: AutoInstanceType<typeof ExportDoctor>;
    patient: AutoInstanceType<typeof ExportPatient>;
    seeder: AutoInstanceType<typeof ExportSeeder>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
