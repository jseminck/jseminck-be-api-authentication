import configureData from './data';
import env2 from 'env2';

export default function configure() {
    env2('config.env'); // Load all environment variables

    configureData();
}