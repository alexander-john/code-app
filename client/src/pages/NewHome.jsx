import { Link } from 'react-router-dom';

export default function NewHome() {
    return (
        <div>
            <h1>New Home</h1>
            <ul>
                <li>
                    <Link to="/javascript">JavaScript</Link>
                </li>
                <li>
                    <Link to="/linux">Linux</Link>
                </li>
                <li>
                    <Link to="/python">Python</Link>
                </li>
            </ul>
        </div>
    );
}