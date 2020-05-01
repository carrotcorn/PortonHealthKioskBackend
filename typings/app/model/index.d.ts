// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddress from '../../../app/model/address';
import ExportAppointment from '../../../app/model/appointment';
import ExportCheckinformfield from '../../../app/model/checkinformfield';
import ExportClinic from '../../../app/model/clinic';
import ExportDoctor from '../../../app/model/doctor';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Address: ReturnType<typeof ExportAddress>;
    Appointment: ReturnType<typeof ExportAppointment>;
    Checkinformfield: ReturnType<typeof ExportCheckinformfield>;
    Clinic: ReturnType<typeof ExportClinic>;
    Doctor: ReturnType<typeof ExportDoctor>;
    User: ReturnType<typeof ExportUser>;
  }
}
