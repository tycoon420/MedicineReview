import {
    describe,
    ddescribe,
    expect,
    iit,
    it,
    beforeEach
  } from '@angular/core/testing';
  import {Med} from './med';
  
  describe('Med', () => {
    it('should create an instance', () => {
      expect(new Med('a', 'b', 1)).toBeTruthy();
    });
  
    it('has a rating of 0', () => {
      expect(new Med('a', 'b').rating).toEqual(0);
    });
  
    describe('Rating a med', () => {
      let med: Med;
  
      beforeEach(() => { med = new Med('Title', 'Description'); });
  
      it('increases the rating by one when it is rated up', () => {
        med.rateUp();
  
        expect(med.rating).toEqual(1);
      });
  
      it('decreases the rating by one when it is rated down', () => {
        med.rateUp();
        med.rateDown();
  
        expect(med.rating).toEqual(0);
      });
  
      it('has no rating smaller than 0', () => {
        med.rateDown();
  
        expect(med.rating).toEqual(0);
      });
    });
  });