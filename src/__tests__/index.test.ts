import {
    transformWordStructureToString,
    transformStringWordStructureToSArr,
    getSmartChunkedArray,
    getNextValidIndex,
    getPreviousValidIndex

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

describe( 'getSmartChunkedArray', () => {
    it( 'with lineBreakOnSpace false and maxBoxesPerLine 0 should just return one row', () => {

        const input = [ true, true, true, true, true, false, true, true, true, true, true  ];
        const expected = [ input ];

        expect( getSmartChunkedArray( input, false, 0 ) ).toEqual( expected );
    } );
    it( 'with lineBreakOnSpace false and maxBoxesPerLine should return multiple chunks', () => {

        const input = [ true, true, true, true, true, false, true, true, true, true, true  ];
        const expected = [
            [ true, true, true, true, true, false ],
            [ true, true, true, true, true ]
        ];

        expect( getSmartChunkedArray( input, false, 6 ) ).toEqual( expected );
    } );
    it( 'with lineBreakOnSpace true and maxBoxesPerLine should return multiple chunks', () => {
        {
            const input = [ true, true, true, true, true, false, true, true, false, true, true, true, true, true  ];
            const expected = [
                [ true, true, true, true, true ],
                [ false ],
                [ true, true ],
                [ false ],
                [ true, true, true, true, true ]
            ];

            expect( getSmartChunkedArray( input, true, 6 ) ).toEqual( expected );
        }
        {
            const input = [ true, true, true, true, true, false, true, true, false, true, true, true, true, true  ];
            const expected = [
                [ true, true, true ],
                [ true, true ],
                [ false ],
                [ true, true ],
                [ false ],
                [ true, true, true ],
                [ true, true ]
            ];

            expect( getSmartChunkedArray( input, true, 3 ) ).toEqual( expected );
        }
    } );
    it( 'if total word length is smaller than maxBoxesPerLine, word should not be splitted', () => {

        const input = [ true, true, true, true, true, false, true, true, true, true, true  ];
        const expected = [ input ];

        expect( getSmartChunkedArray( input, false, 11 ) ).toEqual( expected );
    } );
    it( 'with lineBreakOnSpace true and maxBoxesPerLine 0 word should be splitted based on spaces', () => {

        const input = [ true, true, true, true, true, false, true, true, true, true, true  ];
        const expected = [
            [ true, true, true, true, true ],
            [ false ],
            [ true, true, true, true, true ]
        ];

        expect( getSmartChunkedArray( input, true, 0 ) ).toEqual( expected );
    } );
} );

describe( 'getNextValidIndex', () => {
    it( 'should return the next valid index based on the current array', () => {
        {
            const input = [ true, false, true, true ];
            expect( getNextValidIndex( input, 0 ) ).toEqual( 2 );
        }
        {
            const input = [ true, false, true, true ];
            expect( getNextValidIndex( input, 1 ) ).toEqual( 2 );
        }
        {
            const input = [ true, false, false, true ];
            expect( getNextValidIndex( input, 1 ) ).toEqual( 3 );
        }
        {
            const input = [ true, false, true, true ];
            expect( getNextValidIndex( input, 3 ) ).toEqual( 3 );
        }

    } );
} );

describe( 'getPreviousValidIndex', () => {
    it( 'should return the previous valid index based on the current array', () => {
        {
            const input = [ true, false, true, true ];
            expect( getPreviousValidIndex( input, 3 ) ).toEqual( 2 );
        }
        {
            const input = [ true, false, true, true ];
            expect( getPreviousValidIndex( input, 2 ) ).toEqual( 0 );
        }
        {
            const input = [ true, false, false, true ];
            expect( getPreviousValidIndex( input, 3 ) ).toEqual( 0 );
        }
        {
            const input = [ true, false, true, true ];
            expect( getPreviousValidIndex( input, 0 ) ).toEqual( 0 );
        }

    } );
} );
