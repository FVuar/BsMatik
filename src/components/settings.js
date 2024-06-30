export default function Settings() {
    return (
        <fieldset className="settigs">
            <legend>Settings</legend>
            <ul>
                <li><label htmlFor="theme">theme: </label><input id="theme" type="checkbox" /></li>
            </ul>
            <div className="flex justify-end align-center">
                <button type="button" className="btn btn-green">Save</button>
            </div>
        </fieldset>
    );
}