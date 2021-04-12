import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

export default function printExtras(extra) {
    if (extra) return <CheckIcon />;
    return <ClearIcon />;
}