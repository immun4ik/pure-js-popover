import './styles.css';
import Popover from './popover';

document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('btn1');
    new Popover(btn1, 'Popover title', "And here's some amazing content. It's very engaging. Right?");
});