// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClinic from '../../../app/controller/clinic';
import ExportPublic from '../../../app/controller/public';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    clinic: ExportClinic;
    public: ExportPublic;
    user: ExportUser;
  }
}
