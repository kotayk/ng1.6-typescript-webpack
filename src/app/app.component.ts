const AppComponent = {
    template: `
        <header></header>
        <div>
            <div ui-view>
                <hello-world></hello-world>
                <es6-component-test></es6-component-test>
            </div>
        </div>
        <footer></footer>
      `
};

export default AppComponent;
