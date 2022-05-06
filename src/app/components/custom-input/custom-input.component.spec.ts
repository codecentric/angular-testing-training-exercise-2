import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputComponent } from './custom-input.component';
import { selectElementByDataId } from '../../../test';
import { ReactiveFormsModule } from '@angular/forms';

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomInputComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates an input of type text', () => {
    let inputEl = selectElementByDataId(fixture, 'custom-input');

    expect(inputEl.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('emits an input event when typing into the input field', () => {
    let actualValue: undefined | string;
    component.onInput.subscribe((value) => (actualValue = value));

    let inputEl = selectElementByDataId(fixture, 'custom-input');
    inputEl.nativeElement.value = 'some text';
    inputEl.nativeElement.dispatchEvent(new Event('input'));

    expect(actualValue).toEqual('some text');
  });
});
