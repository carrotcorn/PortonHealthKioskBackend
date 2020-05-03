// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAppointment from '../../../app/controller/appointment';
import ExportCheckinformfield from '../../../app/controller/checkinformfield';
import ExportClinic from '../../../app/controller/clinic';
import ExportDoctor from '../../../app/controller/doctor';
import ExportPatient from '../../../app/controller/patient';
import ExportPublic from '../../../app/controller/public';
import ExportSeeder from '../../../app/controller/seeder';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    appointment: ExportAppointment;
    checkinformfield: ExportCheckinformfield;
    clinic: ExportClinic;
    doctor: ExportDoctor;
    patient: ExportPatient;
    public: ExportPublic;
    seeder: ExportSeeder;
    user: ExportUser;
  }
}
