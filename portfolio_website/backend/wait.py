from asyncio.log import logger
from wsgi import app
from waitress import serve
from paste.translogger import TransLogger
import logging
from main import app

logger = logging.getLogger('waitress')
logger.setLevel(logging.INFO)

serve(TransLogger(app))
