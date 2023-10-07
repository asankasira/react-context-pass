import _ from 'lodash'
export const getRandomWeekDay = () => {
    return _.sample(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'])
}