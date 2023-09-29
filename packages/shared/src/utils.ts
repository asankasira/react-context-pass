import _ from 'lodash'

export const sayHi = (userName: string) => console.log(`Hellow ${userName}`);

export const getRandomName = () => {
    return _.sample(['Julie', 'Diana', 'Marie', 'Anne', 'Sophie'])
}