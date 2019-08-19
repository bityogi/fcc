import VolumeConversionFactory from './VolumeConvertFactory';
import { VolumeType } from './types/volume';
import {
  ToLiters as CubicFeetToLiters,
  ToCubicInches as CubicFeetToCubicInches,
  ToCups as CubicFeetToCups,
  ToGallons as CubicFeetToGallons,
  ToTableSpoons as CubicFeetToTableSpoons
} from './implementations/volume/cubicFeet';

import {
  ToCubicFeet as CubicIncesToCubicFeet,
  ToLiters as CubicInchesToLiters,
  ToCups as CubicInchesToCups,
  ToGallons as CubicInchesToGallons,
  ToTableSpoons as CubicIncesToTableSpoons
} from './implementations/volume/cubicInches';

import {
  ToCubicFeet as CupsToCubicFeet,
  ToCubicInches as CupsToCubicInches,
  ToGallons as CupsToGallons,
  ToLiters as CupsToLiters,
  ToTableSpoons as CupsToTableSpoons
} from './implementations/volume/cups';

import {
  ToCubicFeet as GallonsToCubicFeet,
  ToCubicInches as GallonsToCubicInches,
  ToCups as GallonsToCups,
  ToLiters as GallonsToLiters,
  ToTableSpoons as GallonsToTableSpoons
} from './implementations/volume/gallons';

import {
  ToCubicFeet as LitersToCubicFeet,
  ToCubicInches as LitersToCubicInches,
  ToCups as LitersToCups,
  ToGallons as LitersToGallons,
  ToTableSpoons as LitersToTableSpoons
} from './implementations/volume/liters';

import {
  ToCubicFeet as TableSpoonsToCubicFeet,
  ToCubicInches as TableSpoonsToCubicInches,
  ToCups as TableSpoonsToCups,
  ToGallons as TableSpoonsToGallons,
  ToLiters as TableSpoonsToLiters
} from './implementations/volume/tablespoons';


describe('Volume Conversion Factory', () => {
  const volumeConversionFactory = new VolumeConversionFactory();

  describe('returns a cubic-feet ', () => {
    const from = VolumeType.cubicFeet;

    describe('to cubic-inches', () => {
      const to = VolumeType.cubicInches;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicFeetToCubicInches);
      });
      
      it('converts correctly', () => {
        const volumeFrom = 24;
        const expectedValue = 41472;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to liters', () => {
      const to = VolumeType.liters;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicFeetToLiters);
      });
      
      it('converts correctly', () => {
        const volumeFrom = 1;
        const expectedValue = 28.32;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to cups', () => {
      const to = VolumeType.cups;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicFeetToCups);
      });
      
      it('converts correctly', () => {
        const volumeFrom = 2;
        const expectedValue = 239.38;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to gallons', () => {
      const to = VolumeType.gallons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicFeetToGallons);
      });
      
      it('converts correctly', () => {
        const volumeFrom = 1;
        const expectedValue = 7.48;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to tablespoons', () => {
      const to = VolumeType.tablespoons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicFeetToTableSpoons);
      });
      
      it('converts correctly', () => {
        const volumeFrom = 2;
        const expectedValue = 3830.03;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    

  });

  //Cubic Inches
  describe('returns a cubic inch', () => {
    const from = VolumeType.cubicInches;

    describe('to cubic feet', () => {
      const to = VolumeType.cubicFeet;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicIncesToCubicFeet);
      });

      it('converts correctly', () => {
        const volumeFrom = 1000;
        const expectedValue = 0.58;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
      
    });

    describe('to liters', () => {
      const to = VolumeType.liters;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicInchesToLiters);
      });

      it('converts correctly', () => {
        const volumeFrom = 100;
        const expectedValue = 1.64;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to cups', () => {
      const to = VolumeType.cups;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicInchesToCups);
      });

      it('converts correctly', () => {
        const volumeFrom = 100;
        const expectedValue = 6.93;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to gallons', () => {
      const to = VolumeType.gallons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicInchesToGallons);
      });

      it('converts correctly', () => {
        const volumeFrom = 100;
        const expectedValue = 0.43;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to table spoons', () => {
      const to = VolumeType.tablespoons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CubicIncesToTableSpoons);
      });

      it('converts correctly', () => {
        const volumeFrom = 20;
        const expectedValue = 22.16;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
  });

  // Cups
  describe('returns a cups', () => {
    const from = VolumeType.cups;

    describe('to cubic-feet', () => {
      const to = VolumeType.cubicFeet;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CupsToCubicFeet);
      });

      it('converts correctly', () => {
        const volumeFrom = 100;
        const expectedValue = 0.84;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to cubic-inches', () => {
      const to = VolumeType.cubicInches;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CupsToCubicInches);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 144.38;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to gallons', () => {
      const to = VolumeType.gallons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CupsToGallons);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 0.63;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to liters', () => {
      const to = VolumeType.liters;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CupsToLiters);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 2.37;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to tablespoons', () => {
      const to = VolumeType.tablespoons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(CupsToTableSpoons);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 160;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
  });
  
  //Gallons
  describe('returns a gallons', () => {
    const from = VolumeType.gallons;

    describe('to cubic-feet', () => {
      const to = VolumeType.cubicFeet;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(GallonsToCubicFeet);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 1.34;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to cubic-inches', () => {
      const to = VolumeType.cubicInches;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(GallonsToCubicInches);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 2310;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to cups', () => {
      const to = VolumeType.cups;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(GallonsToCups);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 160;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
  
    describe('to liters', () => {
      const to = VolumeType.liters;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(GallonsToLiters);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 37.85;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to tablespoons', () => {
      const to = VolumeType.tablespoons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(GallonsToTableSpoons);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 2560;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    
  });
  
  //Liters
  describe('returns a liters', () => {
    const from = VolumeType.liters;

    describe('to cubic-feet', () => {
      const to = VolumeType.cubicFeet;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(LitersToCubicFeet);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 0.35;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to cubic-inches', () => {
      const to = VolumeType.cubicInches;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(LitersToCubicInches);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 610.24;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to cups', () => {
      const to = VolumeType.cups;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(LitersToCups);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 42.27;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to gallons', () => {
      const to = VolumeType.gallons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(LitersToGallons);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 2.64;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to tablespoons', () => {
      const to = VolumeType.tablespoons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(LitersToTableSpoons);
      });

      it('converts correctly', () => {
        const volumeFrom = 10;
        const expectedValue = 676.28;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    
    
  });

  //Tablespoons
  describe('returns a tablespoons', () => {
    const from = VolumeType.tablespoons;

    describe('to cubic-feet', () => {
      const to = VolumeType.cubicFeet;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(TableSpoonsToCubicFeet);
      });

      it('converts correctly', () => {
        const volumeFrom = 1000;
        const expectedValue = 0.52;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to cubic-inches', () => {
      const to = VolumeType.cubicInches;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(TableSpoonsToCubicInches);
      });

      it('converts correctly', () => {
        const volumeFrom = 100;
        const expectedValue = 90.25;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to cups', () => {
      const to = VolumeType.cups;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(TableSpoonsToCups);
      });

      it('converts correctly', () => {
        const volumeFrom = 100;
        const expectedValue = 6.25;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });

    describe('to gallons', () => {
      const to = VolumeType.gallons;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(TableSpoonsToGallons);
      });

      it('converts correctly', () => {
        const volumeFrom = 100;
        const expectedValue = 0.39;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    
    describe('to liters', () => {
      const to = VolumeType.liters;
      const convertor = volumeConversionFactory.GetConvertor(from, to);

      it('of valid type', () => {
        expect(convertor).toBeInstanceOf(TableSpoonsToLiters);
      });

      it('converts correctly', () => {
        const volumeFrom = 100;
        const expectedValue = 1.48;
        expect(convertor.convert(volumeFrom)).toBe(expectedValue);
      });
    });
    

  });
  
  
});
