import { NgxTreeModuleModule } from './ngx-tree-module.module';

describe('NgxTreeModuleModule', () => {
  let ngxTreeModuleModule: NgxTreeModuleModule;

  beforeEach(() => {
    ngxTreeModuleModule = new NgxTreeModuleModule();
  });

  it('should create an instance', () => {
    expect(ngxTreeModuleModule).toBeTruthy();
  });
});
