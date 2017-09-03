import {HelloWorldService} from './hello-world.service';

export class HelloWorldController {
    static $inject: string[] = ['HelloWorldService'];
    hello: string;
    // constructor() {}
    constructor(private HelloWorldService: HelloWorldService) {}

    $onInit() {
        this.hello = this.HelloWorldService.getHello();
    }

}

