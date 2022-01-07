import React from 'react';

export default function Table(props) {
	return (
	<table>
		<tbody id="theTableBody">
			{Object.entries(props.todos).map( (entry) => {
				const [i, todo] = entry;
				return (
				<tr key={`${i}_row`}>
					<td key={`${i}_id`}>{i}</td>
					<td key={`${i}_text`}>{todo["task"]}</td>
					<td key={`${i}_del`}>
						<input type="button" value={`Delete ${i}`} onClick={((_i) => () => props.deleter(_i))(i)} />
					</td>
				</tr>
				);
			})}
		</tbody>
	</table>
	);
}
