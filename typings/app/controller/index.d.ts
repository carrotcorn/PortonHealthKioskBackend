// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAppointment from '../../../app/controller/appointment';
import ExportClinic from '../../../app/controller/clinic';
import ExportDoctor from '../../../app/controller/doctor';
import ExportPatient from '../../../app/controller/patient';
import ExportPublic from '../../../app/controller/public';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    appointment: ExportAppointment;
    clinic: ExportClinic;
    doctor: ExportDoctor;
    patient: ExportPatient;
    public: ExportPublic;
    user: ExportUser;
  }
}
