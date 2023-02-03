"""
WSGI config for kuhlwedding2023 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

# import os

# from django.core.wsgi import get_wsgi_application

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kuhlwedding2023.settings')

# application = get_wsgi_application()

import os
from django.core.wsgi import get_wsgi_application

settings_module = 'kuhlwedding2023.production' if 'WEBSITE_HOSTNAME' in os.environ else 'kuhlwedding2023.settings'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)


application = get_wsgi_application()

