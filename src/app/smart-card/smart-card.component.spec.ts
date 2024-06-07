import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SmartCardComponent } from './smart-card.component';

describe('SmartCardComponent', () => {
  let component: SmartCardComponent;
  let fixture: ComponentFixture<SmartCardComponent>;

  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,SmartCardComponent],
      providers: [
        // Provide mocks or other necessary services here
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCardComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });
  
  afterEach(() => {
    httpTestingController.verify(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getGlobalData and getCardDetail on init', () => {
    spyOn(component, 'getGlobalData');
    spyOn(component, 'getCardDetail');
    component.ngOnInit();
    expect(component.getGlobalData).toHaveBeenCalled();
    expect(component.getCardDetail).toHaveBeenCalled();
  });

  it('should fetch card details on initialization', () => {
    const mockResponse = {
      data: [
        { label: 'Test Label 1', address: { street: 'Street 1', postal_code: '12345', separator: '-', city: 'City 1', country: 'Country 1' } },
        { label: 'Test Label 2', address: { street: 'Street 2', postal_code: '67890', separator: '-', city: 'City 2', country: 'Country 2' } }
      ]
    };
  })

}) 
