class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();
    this.repositories.push({
      name: 'Diogo R. Dias',
      description: 'Mussum Ipsum, cacilds vidis litro abertis.',
      avatar_url: 'https://avatars0.githubusercontent.com/u/35599465?v=4',
      html_url: 'https://github.com/drd-2rcl',
    });

    console.log(this.repositories);
  }
}

new App();