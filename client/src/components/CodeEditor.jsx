// src/components/CodeEditor.jsx

import React, { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view';
import { history, historyKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
// You can add a theme like oneDark if you want, but no defaultHighlightStyle

export default function CodeEditor({ code = '', onChange }) {
    const editorRef = useRef();
    const editorViewRef = useRef();

    useEffect(() => {
        if (!editorRef.current) return;

        const state = EditorState.create({
            doc: code,
            extensions: [
                lineNumbers(),
                highlightActiveLine(),
                history(),
                keymap.of(historyKeymap),
                javascript(),
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        const updated = update.state.doc.toString();
                        onChange?.(updated);
                    }
                }),
            ],
        });

        const view = new EditorView({
            state,
            parent: editorRef.current,
        });

        editorViewRef.current = view;

        return () => view.destroy();
    }, []); // <-- no [code] here

    return (
        <div
            ref={editorRef}
            style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                minHeight: '300px',
                fontSize: '14px',
                fontFamily: 'monospace',
            }}
        />
    );
}
