import React, { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';

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
                keymap.of([...defaultKeymap, ...historyKeymap]),
                javascript(),
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        const updated = update.state.doc.toString();
                        onChange?.(updated);
                    }
                }),
            ],
        });

        editorViewRef.current = new EditorView({
            state,
            parent: editorRef.current,
        });

        return () => editorViewRef.current.destroy();
    }, []);

    useEffect(() => {
        const view = editorViewRef.current;
        if (!view) return;
        const current = view.state.doc.toString();
        if (code !== current) {
            view.dispatch({
                changes: { from: 0, to: current.length, insert: code },
            });
        }
    }, [code]);

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
