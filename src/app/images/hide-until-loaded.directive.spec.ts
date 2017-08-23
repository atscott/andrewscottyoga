import {Component, DebugElement} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {HideUntilLoaded} from './hide-until-loaded.directive';
import {ImagesModule} from './images.module';

// taze: describe from //third_party/javascript/typings/jasmine

@Component({selector: 'test-cmp', template: '<img hideUntilLoaded src="">'})
export class TestCmp {}

describe('progressive background image', () => {

  let fixture: ComponentFixture<TestCmp>;
  let component: TestCmp;
  let imageElement: DebugElement;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [TestCmp],
          imports: [ImagesModule],
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCmp);
    component = fixture.componentInstance;
    imageElement = fixture.debugElement.query(By.directive(HideUntilLoaded));
    fixture.detectChanges();
  });

  it('has opacity transition', () => {
    expect(imageElement.nativeElement.style.transition)
        .toEqual('opacity 0.5s linear');
  });

  it('has 0 opacity when not loaded', () => {
    expect(imageElement.nativeElement.style.opacity).toEqual('0');
  });

  it('has 1 opacity when loaded', () => {
    imageElement.injector.get(HideUntilLoaded).opacity = 1;
    fixture.detectChanges();
    expect(imageElement.nativeElement.style.opacity).toEqual('1');
  });

});