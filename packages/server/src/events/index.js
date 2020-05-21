import DataStore from '../models/DataStore';
import controllerEvents from './controller';
import gamestateEvents from './gamestate';

const dataStore = new DataStore();
export default (io) => {
  io.on('connection', (socket) => {
    controllerEvents(io, socket, dataStore);
    gamestateEvents(io, socket, dataStore);
  });
};
