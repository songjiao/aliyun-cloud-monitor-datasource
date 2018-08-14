import AliyunCloudMonitorDatasource from './datasource';
import {AliyunCloudMonitorQueryCtrl} from './query_ctrl';
import {AliyunCloudMonitorConfigCtrl} from './config_ctrl';

class AliyunCloudMonitorAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export {
  AliyunCloudMonitorDatasource as Datasource,
  AliyunCloudMonitorQueryCtrl as QueryCtrl,
  AliyunCloudMonitorConfigCtrl as ConfigCtrl,
  AliyunCloudMonitorAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};
