
import dbz from './goku.jpg'
import altText from './altTextGoku.txt';
import './dbz.scss';
class Dbz {
    render() {
        const img=document.createElement('img');
        img.src=dbz;
        img.alt=altText;
        img.classList.add('dbz-img');
        const root=document.getElementById('root');
        root.append(img);
    }
}
export default Dbz;