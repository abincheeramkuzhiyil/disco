import React from 'react';

export default function Container(props) {
    const styles = {
        container: { padding: '1rem', backgroundColor: 'rgb(234, 238, 243)' },
    };

    return <div style={styles.container}>{props.children}</div>;
}
