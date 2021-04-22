import {
    transformWordStructureToString,
    transformStringWordStructureToSArr
} from '../index';

describe( 'transformWordStructureToString', () => {
    it( 'should return correct string based on input array', () => {
        {
            const input = [ true, true, true, true, true, false, true, true, true, true, true ];
            const expected = 'LLLLLSLLLLL';

            expect( transformWordStructureToString( input ) ).toEqual( expected );
        }

        {
            const input = [ true, true, false, true, true, true ];
            const expected = 'LLSLLL';

            expect( transformWordStructureToString( input ) ).toEqual( expected );
        }
    } );
} );

describe( 'transformStringWordStructureToSArr', () => {
    it( 'given an array of strings, should return the correct multilevel array of booleans', () => {
        {
            const input = [ 'LLLSLL', 'LLL', 'LSL' ];
            const expected = [
                [ true, true, true, false, true, true ],
                [ true, true, true ],
                [ true, false, true]
            ];

            expect( transformStringWordStructureToSArr( input ) ).toEqual( expected );
        }
        {
            const input = [ 'LLLL', 'S', 'LLL' ];
            const expected = [
                [ true, true, true, true ],
                [ false ],
                [ true, true, true]
            ];

            expect( transformStringWordStructureToSArr( input ) ).toEqual( expected );
        }

    } );
} );
