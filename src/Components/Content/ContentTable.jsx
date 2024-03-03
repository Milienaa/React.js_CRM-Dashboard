import ContentPagination from "./ContentPagination";
import ContentRow from "./ContentRow";
import ContentRowTop from "./ContentRowTop";

export default function ContentTable() {
    return (
        <div className="content__table">
            <ContentRowTop />
            <ContentRow />
            <ContentPagination />
        </div>
    );
}