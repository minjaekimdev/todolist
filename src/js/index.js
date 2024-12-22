import { localStorageRead } from './storage.js';
import todo from './todo.js';
import weekly from './weekly.js';
import monthly from './monthly.js';
import yearly from './yearly.js';
import habit from './habit.js';
import '../css/index.css';

localStorageRead();
todo();
weekly();
monthly();
yearly();
habit();