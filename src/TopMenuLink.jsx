export default function TopMenuLink({
    url, label, currentItem, setTestValue, setPage
}) {

    const linkClicked = () => {
        setPage(url);
    }

    return (
        <a className={ 'link' + (currentItem === '' ? ' link--highlighted' : '')} 
        href={ '#' + url }
        onClick={ linkClicked } >
            {label}
        </a>
    )
}