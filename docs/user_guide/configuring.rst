*************
Configuration
*************

There are a number of options for configuring your site's look and feel.
All configuration options are passed with the ``html_theme_options`` variable
in your ``conf.py`` file. This is a dictionary with ``key: val`` pairs that
you can configure in various ways. This page describes the options available to you.

Configure social media buttons
==============================

If you'd like social media buttons to show up to the right of your nav bar, use the
following configuration:

.. code:: python

   html_theme_options: {
     "github_url": "https://github.com/<your-org>/<your-repo>",
     "twitter_url": "https://twitter.com/<your-handle>",
   }

Adding external links to your nav bar
=====================================

You can add external links to your navigation bar. These will show up to the right
of your site's main links, and will have a small icon indicating that they point to
an external site. You can add external links to the nav bar like so:

.. code:: python

   html_theme_options: {
     "external_links": [
         {"name": "link-one-name", "url": "https://<link-one>"},
         {"name": "link-two-name", "url": "https://<link-two>"}
     ]
   }


Hiding the previous and next buttons
====================================

By default, each page of your site will have "previous" and "next" buttons
at the bottom. You can hide these buttons with the following configuration:

.. code:: python

   html_theme_options: {
     "show_prev_next": False
   }
