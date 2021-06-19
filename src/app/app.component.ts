import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { HelloComponent, HiComponent } from './hello.component';
import { HostDirective } from './host.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Gris';

  @ViewChild(HostDirective, { static: true }) childRef: HostDirective;
  components = [HiComponent, HelloComponent];

  constructor(private componentRes: ComponentFactoryResolver) {}

  loadComponent(id) {
    this.childRef.viewRef.clear();
    const resolvedFactor = this.componentRes.resolveComponentFactory(
      this.components[id]
    );
    const compFac = this.childRef.viewRef.createComponent(resolvedFactor);
    compFac.instance.name = "Gris"
  }
}
