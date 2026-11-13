CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  book_title text CHECK (book_title IS NULL OR char_length(book_title) <= 200),
  author_name text CHECK (author_name IS NULL OR char_length(author_name) <= 120),
  service text NOT NULL CHECK (char_length(service) <= 80),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
-- No policies for anon/authenticated: submissions are inserted only from server code
-- and are never readable from the browser.