declare interface StubedWindow {
  fetch: Sinon.SinonStub & typeof window.fetch;
}