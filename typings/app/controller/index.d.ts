// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPublic from '../../../app/controller/public';

declare module 'egg' {
  interface IController {
    public: ExportPublic;
  }
}
