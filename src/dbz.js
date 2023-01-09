import Heading from './components/heading/heading';
import Dbz from './components/dbz/dbz';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('dbz page'));
const dbz = new Dbz();
dbz.render();