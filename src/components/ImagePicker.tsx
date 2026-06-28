"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string | null;
  onChange: (url: string) => void;
}

export default function ImagePicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      if (!loaded) {
        setLoading(true);
        fetch("/api/admin/uploads")
          .then((res) => res.json())
          .then((data: string[]) => {
            setImages(data || []);
            setLoaded(true);
          })
          .finally(() => setLoading(false));
      }
    } else {
      dialogRef.current?.close();
    }
  }, [open, loaded]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) setOpen(false);
  };

  const select = (url: string) => {
    onChange(url);
    setOpen(false);
  };

  const displayName = (url: string) => decodeURIComponent(url.split("/").pop() ?? url);

  return (
    <div className="img-picker">
      <div className="img-picker__preview">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="img-picker__thumb" />
        ) : (
          <div className="img-picker__empty">No image</div>
        )}
      </div>
      <div className="img-picker__btns">
        <button type="button" className="btn btn--ghost" onClick={() => setOpen(true)}>
          Choose from uploads
        </button>
        {value && (
          <button type="button" className="btn btn--quiet" onClick={() => onChange("")}>
            Remove
          </button>
        )}
      </div>

      <dialog ref={dialogRef} className="img-picker__dialog" onClick={handleBackdropClick}>
        <div className="img-picker__dialog-inner">
          <div className="img-picker__dialog-head">
            <h3>Choose an image</h3>
            <button type="button" className="img-picker__close" onClick={() => setOpen(false)}>✕</button>
          </div>
          {loading && <p className="admin-note" style={{ padding: "1rem" }}>Loading images…</p>}
          {!loading && images.length === 0 && (
            <p className="admin-note" style={{ padding: "1rem" }}>No images found in public/uploads.</p>
          )}
          {!loading && images.length > 0 && (
            <div className="img-picker__grid">
              {images.map((url) => (
                <button
                  key={url}
                  type="button"
                  className={`img-picker__item${value === url ? " img-picker__item--active" : ""}`}
                  onClick={() => select(url)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt="" />
                  <span>{displayName(url)}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}
