import ContentTableRow from "./ContentTableRow";
import { useContext } from "react";
import ContentContext from "./ContentContext";

export default function ContentRow() {
    const contentArr = useContext(ContentContext); 
    
    return (
        <div className="content__row">
                <table className="table">
                    <tr className="table__head">
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Status</th>
                    </tr>
                    
                {contentArr.map((elem) => {
                    return <ContentTableRow key={Date.now}
                                            name={elem.name}
                                            company={elem.company}
                                            phone={elem.phone}
                                            email={elem.email}
                                            country={elem.country}
                                            status={elem.status} 
                                            />
                })}
                    

                    
                </table>
            </div>
    );
}