import React from 'react';

function useNotes(databaseInstance) {

    const [records, setRecords] = React.useState([]);

    const fetchRecords = async () => {
        let _records;
        try {
            _records = await databaseInstance.allDocs({ include_docs: true });
        } catch (err) {
            console.log("Something went wrong fetching all docs", err);
            return;
        }
        setRecords(_records.rows.map((_record) => {
            return {
                createdAt: _record.doc.createdAt,
                text: _record.doc.text,
                title: _record.doc.title,
                _id: _record.id
            }
        }))

    }
    React.useEffect(() => {
        fetchRecords();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return records;
}

export default useNotes;