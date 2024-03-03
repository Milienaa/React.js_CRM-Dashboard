export default function ContentTableRow({name, company, phone, email, country, status}) {
    return (
        <tr className="table__row">
                        <td className="table__name">{name}</td>
                        <td className="table__company">{company}</td>
                        <td className="table__phone">{phone}</td>
                        <td className="table__email">{email}</td>
                        <td className="table__country">{country}</td>
                        <td className="table__status">
                            {status === 'Active' ?
                            (<button className="btn btn--green">{status}</button>)
                            :
                            (<button className="btn btn--red">{status}</button>)}
                        </td>
        </tr>  
    );
}