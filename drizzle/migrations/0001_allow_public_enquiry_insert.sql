GRANT INSERT ON public.contact_submissions TO anon, authenticated;

CREATE POLICY "Visitors can submit enquiries"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);