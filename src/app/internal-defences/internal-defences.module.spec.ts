import { InternalDefencesModule } from './internal-defences.module';

describe('InternalDefencesModule', () => {
  let internalDefencesModule: InternalDefencesModule;

  beforeEach(() => {
    internalDefencesModule = new InternalDefencesModule();
  });

  it('should create an instance', () => {
    expect(internalDefencesModule).toBeTruthy();
  });
});
