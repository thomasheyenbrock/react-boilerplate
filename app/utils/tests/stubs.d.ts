declare interface IStubedWindow {
  fetch: Sinon.SinonStub & typeof window.fetch;
}
