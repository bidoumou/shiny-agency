import { formatJobList, formatQueryParams } from '.'

describe('La fonction formatJobList', () => {
    it('should add a coma to an item', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })

    it('should not add a coma to the last item', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('La fonction formatQueryParams', () => {
    it('should not add a & before the first element', () => {
        const expectedState = 'a1=answer1'
        expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })

    it('should add & before an item', () => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
            expectedState,
        )
    })
})
