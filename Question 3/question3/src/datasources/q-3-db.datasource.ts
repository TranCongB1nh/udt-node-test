import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'q3db',
  connector: 'mongodb',
  url: 'mongodb://root:example@localhost:27017',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Q3DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'q3db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.q3db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
